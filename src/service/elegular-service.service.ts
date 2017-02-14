import {Injectable} from "@angular/core";
import {ElegularWindowOptions, WindowId} from "../angular-options";
import {ElegularWindowRef} from "./elegular-window-ref.service";
import {WindowMessageDispatcherBase} from "./window-message-dispatcher-base.class";
import BrowserWindow = Electron.BrowserWindow;

@Injectable()
export class ElegularService extends WindowMessageDispatcherBase{
    constructor(){
        super(null);
    }

    public createWindow(configOrId: ElegularWindowOptions|WindowId): ElegularWindowRef {
        let id = this._internalFunctionSync("createWindow", configOrId);
        return new ElegularWindowRef(id);
    }

    public async createWindowAsync(configOrId: ElegularWindowOptions|WindowId): Promise<ElegularWindowRef>{
        let id: number= await this._internalFunctionAsync("createWindow", configOrId);
        return new ElegularWindowRef(id);
    }

    public createModal(){

    }

    //noinspection JSMethodCanBeStatic
    public getCurrentBrowserWindow():BrowserWindow{
        return remote.getCurrentWindow();
    }
}