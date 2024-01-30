import LinearGradient from "react-native-linear-gradient"
import { Button, Card, Text, View } from "react-native-ui-lib"

const ClassScreen = () => {
	return (
		<View bg-surface flex padding-12>
			<Card flex paddingV-8 paddingH-12 gap-10>
				<View bg-surface paddingV-5 paddingH-10 br30 style={{ alignSelf: 'flex-end' }}>
					<View row gap-4>
						<Text bold>
							{5}
						</Text>
						<Text>
							Live classes left
						</Text>
					</View>
				</View>
				<View br20 style={{ overflow: 'hidden' }}>
					<LinearGradient
						colors={['rgba(246, 209, 141, 0.9) 0.51%', 'rgba(217, 217, 217, 0) 99.5%']}
						style={{
							padding: 20,
							alignItems: 'flex-start',
							justifyContent: 'space-between',
							minHeight: 185,
						}}
					>
						<View paddingV-5 paddingH-12 br50 bg-secondary >
							<Text textInverse uppercase semiBold>
								Beginner
							</Text>
						</View>

						<View padding-8 br40 bg-white style={{ alignSelf: 'flex-end' }}>
							<View row gap-12>
								<View bg-surface br100 height={45} width={45} />
								<View gap-4 centerV>
									<Text bold>
										By Kamel BENSLIMANE
									</Text>
									<Text>
										Teacher
									</Text>
								</View>
							</View>
						</View>
					</LinearGradient>
					<View bg-white>
						<View padding-20>
							<Text>
								Dive into the richness of Arabic culture while improving your language skills
							</Text>

						</View>
						<Button label={'Join Now'} size={Button.sizes.medium} bg-primary br20 paddingV-20 bold />
					</View>
				</View>
			</Card>
		</View>
	)
}

export default ClassScreen