import { Box } from "@chakra-ui/react";

Box

const ItemListContainer = ({ greeting }) => {
    return (
        <Box 
        backgroundColor={"rgba(255, 0, 0, .4);"} 
        width={"100%"} 
        height={"90vh"} 
        display={"flex"} 
        alignItems={"center"} 
        justifyContent={"center"}
        fontSize={"30px"}>{greeting}</Box>
    )
}

export default ItemListContainer;