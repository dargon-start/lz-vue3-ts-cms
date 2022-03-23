import { ILoginState } from "./login/type";
import { IanalysisType } from "./main/analysis/type";
import { IsystemState } from "./main/system/user/type";

export interface IrootState {
  name: string;
  password: string;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}
export interface IRootWithModule {
  loginModule: ILoginState;
  systemModule: IsystemState;
  analysisModule: IanalysisType;
}

export type IStoreType = IrootState & IRootWithModule;
