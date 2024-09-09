import { Flex, Box, Text, Center } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    return (
        <Flex backgroundColor={"rgba(255, 255, 255, .1)"} height={"100%"} width={"80px"} padding={1} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box><FaShoppingCart size={"2.3rem"} color="grey" /></Box>
            <Text fontSize={20}>99</Text>
        </Flex>
    )
}