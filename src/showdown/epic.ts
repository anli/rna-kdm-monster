import {filter, map} from 'rxjs/operators';
import ShowdownService from './service';
import showdownSlice from './slice';

const loadEpic = (action$: any) =>
  action$.pipe(
    filter((action: any) => action.type === showdownSlice.actions.load.type),
    map((action: any) => ShowdownService.getData(action.payload)),
    map((data: any) => showdownSlice.actions.loadSuccess(data)),
  );

const epics = [loadEpic];

export default epics;
