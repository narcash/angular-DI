
import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class BetterLoggerService extends LoggerService {
  override info(msg: string) {
    super.info('"better" ' + msg + ' "better-logger"')
  }
}
