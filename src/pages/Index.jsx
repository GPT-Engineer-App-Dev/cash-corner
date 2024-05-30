import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={6} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={NavLink} to="/" exact>Home</Link>
          <Link as={NavLink} to="/world">World</Link>
          <Link as={NavLink} to="/business">Business</Link>
          <Link as={NavLink} to="/markets">Markets</Link>
          <Link as={NavLink} to="/opinion">Opinion</Link>
          <Link as={NavLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="md" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Article Title 1</Heading>
              <Text mt={2}>Summary of the news article 1...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Article Title 2</Heading>
              <Text mt={2}>Summary of the news article 2...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="sm">Article Title 3</Heading>
              <Text mt={2}>Summary of the news article 3...</Text>
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