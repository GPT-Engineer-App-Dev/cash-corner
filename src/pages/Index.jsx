import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={NavLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={NavLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
          <Link as={NavLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
          <Link as={NavLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link as={NavLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link as={NavLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
        </HStack>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="md" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Article Title 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Article Title 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Article Title 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.50">
          <Heading as="h2" size="md" mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Trending Topic 1</Heading>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Trending Topic 2</Heading>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Trending Topic 3</Heading>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;