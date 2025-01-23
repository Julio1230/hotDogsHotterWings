import { VStack, Text, Box, Center, HStack, Image} from "@chakra-ui/react";
import pizzaPic from '../../assets/images/pizzaDogo.jpeg';
import rellenoPic from '../../assets/images/rellenoDog.jpeg';
import supreme from '../../assets/images/supreme.jpeg';
import dorinachoDog from '../../assets/images/dorinachoDog.jpeg';
import chixFajita from '../../assets/images/chickenFajita.jpeg';
import beefFajita from '../../assets/images/beefFajita.jpeg';
import crazyCheese from '../../assets/images/crazyCheese.jpeg';
import wings from '../../assets/images/wings.png';
import chipotle from '../../assets/images/chipotle.jpeg';
import chorizo from '../../assets/images/chorizoBurger.jpeg';
import guacamole from '../../assets/images/guacamole.jpeg';
import greenChile from '../../assets/images/greenchile.jpeg';



export const Menu = () => {
            return (
                <VStack>
                    <Box width={'100vw'} padding={4}> 
                        <Center fontSize={'2xl'} fontWeight={"semibold"}>Hotdogs.</Center>
                    </Box>
                    <Box padding={8}>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Pizza Dogo</Text>
                    <Image src={pizzaPic} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Relleno Dogo</Text>
                    <Image src={rellenoPic} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Dogo Supreme</Text>
                    <Image src={supreme} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Dorinacho Dogo</Text>
                    <Image src={dorinachoDog} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Beef Fajita Dogo</Text>
                    <Image src={beefFajita} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Chicken Fajita Dogo</Text>
                    <Image src={chixFajita} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Crazy Cheese Dogo</Text>
                    <Image src={crazyCheese} aspectRatio={4 / 5} blockSize={"500px"} />
                    </Box>
                    <Box width={'100vw'} padding={4}>
                        <Center fontSize={'2xl'} fontWeight={"semibold"}>Wings.</Center>
                    </Box>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Chicken Wings</Text>
                    <Image src={wings} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}> You can order from our delicious wings in orders of 6 or 12 increments add an order of fries and a soda with them 
                        to complete the meal.
                    </Text>
                    <HStack>
                        <Text fontSize={'xl'}>Flavors:</Text>
                        <Text fontSize={'xl'}>Buffalo,</Text>
                        <Text fontSize={'xl'}>BBQ,</Text>
                        <Text fontSize={'xl'}>Teriyaki,</Text>
                        <Text fontSize={'xl'}>Spicy Orange,</Text>
                        <Text fontSize={'xl'}>Pinneaple Habanero</Text>
                    </HStack>
                    <Box width={'100vw'} padding={4}>
                        <Center fontSize={'2xl'} fontWeight={"semibold"}>Hamburgers.</Center>
                    </Box>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Chipotle Cream Cheese Burger</Text>
                    <Image src={chipotle} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Chorizo Burger</Text>
                    <Image src={chorizo} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Green Chile Burger</Text>
                    <Image src={greenChile} aspectRatio={4 / 5} blockSize={"500px"} />
                    <Text fontSize={'xl'} fontWeight={'medium'}>Guacamole Burger</Text>
                    <Image src={guacamole} aspectRatio={4 / 5} blockSize={"500px"} />
                    <HStack>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Cheeseburger</Text>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Double Cheeseburger</Text>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Bacon Cheeseburger</Text>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Double Bacon Cheeseburger</Text>
                    </HStack>
                    <Box>
                    <Center fontSize={'2xl'} fontWeight={"semibold"}>Other Items.</Center>
                    </Box>
                    <HStack>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Maruchan Choreada</Text>
                    <Text fontSize={'xl'} fontWeight={'medium'}>Dorinachos</Text>
                    </HStack>
                </VStack>
            )
}