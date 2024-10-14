import { Flex, Box, Text, Center} from "@chakra-ui/react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";


export const CartWidget = () => {

    const { cartState } = useContext(CartContext);
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Link to="/checkout">
            <Flex backgroundColor={"rgba(255, 255, 255, .1)"} height={"100%"} width={"80px"} padding={1} justifyContent={"space-evenly"} alignItems={"center"}>
            <Box><FaShoppingCart size={"2.3rem"} color="grey" /></Box>
            <Text fontSize={20}>{qtyTotalItems}</Text>
        </Flex>
        </Link>
    );
};