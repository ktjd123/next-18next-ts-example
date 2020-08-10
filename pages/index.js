import React, { Component } from "react";
import { i18n } from "../i18n";

class index extends Component {
	render() {
		return (
			<div>
				<input placeholder={i18n.t("plc-test")} />
				<div>{i18n.t("test")}</div>
			</div>
		);
	}
}
export default index;
