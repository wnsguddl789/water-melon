import Component from "../core/Component";

import "../scss/header.scss";
interface State {}

export default class Header extends Component<State> {
	constructor(target: HTMLElement) {
		const state: State = {};
		super(target, state);
	}

	template() {
		return /* html */ `
            <div class="header-container">
                <span>HOME</span>
                <div class="button-section">
                    <ul>
                        <li>이용권</li>
                        <li>햄버거</li>
                    </ul>
                </div>
            </div>
        `;
	}
}
