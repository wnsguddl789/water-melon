import app from "./app";
import { router, navigateTo } from "./core/Router";

window.addEventListener("popstate", router);

export const root = document.getElementById("app") as HTMLDivElement;

document.addEventListener("DOMContentLoaded", () => {
	navigateTo(window.location.pathname);
	document.body.addEventListener("click", (e) => {
		const target = e.target as HTMLAnchorElement;

		if (target && target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(target.href);
		}
	});
});

new app(root);
