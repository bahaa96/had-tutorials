import { useEffect } from "react";
import LinearGradient from "react-native-linear-gradient"
import { Button, Card, Text, View } from "react-native-ui-lib"
import { FlashList } from "@shopify/flash-list";


import { useMyClasses } from './useMyClasses.ts';
import { MyClass } from "../../domain-models";
import { StyleSheet } from "react-native";
import ClassEntranceSheet from "./ClassEntranceSheet";
import { registerSheet } from "react-native-actions-sheet";

registerSheet("class-entrance-sheet", ClassEntranceSheet);


const ESTIMATED_ITEM_HEIGHT = 400;
const ESTIMATED_ITEM_MARGIN = 12;

const ClassScreen = () => {
	const { classes, isloading, error, changePage } = useMyClasses();

	const handleClassEnteranceClick = () => {
		// Show an action sheet
	}


	useEffect(() => {
		/* TODO: Future imporvment:
		 show an error message in case of Domain error or make an actions in case of network error

		 */
	}, [error])

	return (
		<View bg-surface flex padding-12>
			<Card flex paddingV-8 paddingH-12 gap-10>
				<View bg-surface paddingV-5 paddingH-10 br30 style={styles.selfEnd}>
					<View row gap-4>
						<Text bold primary>
							{5}
						</Text>
						<Text>
							Live classes left
						</Text>
					</View>
				</View>
				<FlashList
					data={classes}
					renderItem={({ item }: { item: MyClass }) => (
						<View br20 marginB-12 style={styles.overflowHidden} key={item.id}>
							<LinearGradient
								colors={['rgba(246, 209, 141, 0.9) 0.51%', 'rgba(217, 217, 217, 0) 99.5%']}
								style={styles.classCardCoverImageOverlayBackground}
							>
								<View paddingV-5 paddingH-12 br50 bg-secondary >
									<Text badge textInverse uppercase>
										{item.level}
									</Text>
								</View>

								<View padding-8 br40 bg-white style={styles.selfEnd}>
									<View row gap-12>
										<View bg-surface br100 height={32} width={32} />
										<View gap-4 centerV>
											<Text bold h5>
												By {item.teacher.name}
											</Text>
											<Text light>
												{item.teacher.role}
											</Text>
										</View>
									</View>
								</View>
							</LinearGradient>
							<View bg-white>
								<View padding-20>
									<Text>
										{item.description}
									</Text>

								</View>
								<Button label={'Join Now'} size={Button.sizes.medium} bg-primary br30 paddingV-20 bold />
							</View>
						</View>
					)}
					estimatedItemSize={ESTIMATED_ITEM_HEIGHT + ESTIMATED_ITEM_MARGIN}
				/>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	selfEnd: {
		alignSelf: 'flex-end'
	},
	overflowHidden: {
		overflow: 'hidden'
	},
	classCardCoverImageOverlayBackground: {
		padding: 20,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		minHeight: 185,
	}
})

export default ClassScreen