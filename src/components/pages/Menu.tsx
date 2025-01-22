import { VStack, Text, Box, Center, HStack} from "@chakra-ui/react";

export const Menu = () => {
            return (
                <VStack>
                    <Box width={'100vw'} padding={4}> 
                        <Center fontSize={'2xl'} fontWeight={"semibold"}>Hotdogs.</Center>
                    </Box>
                    <Box padding={8}>
                    <HStack>
                    <Text fontSize={'xl'}>Pizza Dogo</Text>
                    <Text fontSize={'xl'}>Relleno Dogo</Text>
                    </HStack>
                    </Box>
                </VStack>
            )
}