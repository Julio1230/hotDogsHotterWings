import { VStack, Text, Box, Center} from "@chakra-ui/react";

export const About = () => {
        return (
            <VStack>
                <Box width={'100vw'} padding={4}> 
                    <Center fontSize={'2xl'} fontWeight={"semibold"}>More about the owners.</Center>
                </Box>
                <Box padding={8}>
                <Text fontSize={'xl'}>Jose and Bertha Madrigal used to be owners of Alicias restaurant that was located on college and later on link lane.
                    Jose has prior experience as a chef as he worked at The China palace before opening Alicia's. They thought they were done serving food
                    but missed cooking so on one of their trips to Mexico they noticed their hometowns making hotdogs in unique ways. They decided to bring 
                    the idea back with them and serve some hotdogs like they do in Mexico. That and the way Jose makes hot wing sauce is how the foodtruck
                     Hotdogs & Hotter Wings was born anything else on the menu is a plus.
                </Text>
                </Box>
            </VStack>
        )

    }