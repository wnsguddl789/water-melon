import Component from "../core/Component";

import "../scss/HomeView.scss";

type RecommendMusic = {
	title: string;
	imageSrc: string;
};

interface State {
	recommendMusicList: RecommendMusic[];
}

export default class HomeView extends Component<State> {
	constructor(target: HTMLElement) {
		const state: State = {
			recommendMusicList: Array.from({ length: 5 }).map(() => ({
				title: "이번 주 인기 플레이리스트",
				imageSrc: "이번 주 인기 플레이리스트",
			})),
		};
		super(target, state);
	}

	protected template(): string {
		const {
			state: { recommendMusicList },
			recommendMusicTemplate,
		} = this;

		return /* html */ `
			<div class="HomeView-container">
				<h1 class="recommend-music_title">당신이 찾던 음악</h1>
				<ul class="recommend-music_list">
					${recommendMusicList
						.map((recommendMusicItem) => recommendMusicTemplate(recommendMusicItem))
						.join("")}
				</ul>
			</div>
        `;
	}

	private recommendMusicTemplate(recommendMusicItem: RecommendMusic) {
		return /* html */ `
			<li class="recommend-music_list_item">
				<p class="recommend-music_list_item-title">${recommendMusicItem.title}</p>

				<div class="recommend-music_card">
					<button class="recommend-music_card-paly_button">Play</button>
					<div class="recommend-music_card-image">Image</div>
					<p class="recommend-music_card-title">이별 BGM TOP100</p>
					<p class="recommend-music_card-hashtag">#이별 #슬픔</p>
				</div>
			</li>
		`;
	}
}
