import { Button, ButtonText, GluestackUIProvider, Progress, ProgressFilledTrack, Switch, Text, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <VStack
        backgroundColor="$secondary300"
        width="100%"
        height="100%"
        padding="$4"
        justifyContent="center"
        alignItems="center">
        <Text>My App</Text>

        <Button
          size="lg"
          width="100%"
          margin="$5"
          variant="solid"
          action="primary"
          backgroundColor='$rose600'
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Add </ButtonText>
        </Button>

        <Progress value={70} w={320} size="md">
          <ProgressFilledTrack backgroundColor='$rose600' />
        </Progress>

        <Switch size="lg" isDisabled={false} />
      </VStack>
    </GluestackUIProvider>
  );
}