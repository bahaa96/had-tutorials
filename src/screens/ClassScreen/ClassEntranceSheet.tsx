import ActionSheet, { type SheetProps } from "react-native-actions-sheet";
import { Text, View } from "react-native-ui-lib";

const ClassEntranceSheet = (props: SheetProps) => {
	return (
		<ActionSheet id={props.sheetId}>
			<View>
				<Text>Hello World</Text>
			</View>
		</ActionSheet>
	);
}

export default ClassEntranceSheet;