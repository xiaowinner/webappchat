import { useEffect } from "react"
import * as Define from "../Live2D/Render/Define";
import { Delegate } from "../Live2D/Render/Delegate";
export default function useLive2D() {
    return useEffect(() => {
        Delegate.releaseInstance();
        if (Delegate.getInstance().initialize() === false) {
            return;
        }
        Delegate.getInstance().run();
        if (Define.CanvasSize === "auto") {
            Delegate.getInstance().onResize();
            window.addEventListener("resize", () => {
                Delegate.getInstance().onResize();

            });
        }
    }, []);
}