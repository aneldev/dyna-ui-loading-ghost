import * as React from "react";

import "./DynaLoadingGhost.less";

export interface IDynaLoadingGhostProps {
	className?: string;
}

export class DynaLoadingGhost extends React.Component<IDynaLoadingGhostProps> {
	static defaultProps: IDynaLoadingGhostProps = {
		className: '',
	};

	public render(): JSX.Element {
		const {
			className: userClassName,
		} = this.props;

		const className: string = [
			'dyna-loading-ghost',
			userClassName || '',
		].join(' ').trim();

		return (
			<div className={className}/>
		);
	}
}
