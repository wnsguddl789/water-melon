import Component from "../core/Component";

import "../scss/BottomNavigation.scss";

interface State {}

export default class BottomNavigation extends Component<State> {
	constructor(target: HTMLElement) {
		const state: State = {};
		super(target, state);
	}

	template() {
		return /* html */ `
            <div class="bottom-navigation_container">
                <ul class="bottom-navigation_list">
                    <li><a data-link href="/">HOME</a></li>
                    <li><a data-link href="/trend">TREND</a></li>
                    <li><a data-link href="/view">VIEW</a></li>
                    <li><a data-link href="/search">SEARCH</a></li>
                    <li><a data-link href="/profile">PROFILE</a></li>
                </ul>
            </div>
        `;
	}
}
