import {
    Button,
    Container,
    Flex,
    HStack,
    Text,
    useColorMode,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  import { PlusSquareIcon } from "@chakra-ui/icons";
  import { IoMoon } from "react-icons/io5";
  import { LuSun } from "react-icons/lu";
  
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <div>
        <Container maxW={"1140px"} px={4}>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <Text
              fontSize={{ base: "35", sm: "45" }}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={"center"}
              bgGradient="linear(to-r, #FFD700, #FFA500)"
              bgClip={"text"}
              style={{ fontFamily: "Garamond" }}
            >
              <Link to={"/"}>G L I N T</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
              <Link to={"/create"}>
                <Button>
                  <PlusSquareIcon fontSize={20} />
                </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size={"20"} />}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </div>
    );
  };
  
  export default Navbar;
  