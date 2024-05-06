import { Box, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { FaMusic, FaHome, FaInfoCircle, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minHeight="100vh">
      <Flex as="nav" bg="gray.800" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" paddingLeft={5}>BandName</Heading>
        <VStack as="ul" spacing={5} direction="row" paddingRight={5}>
          <Link as="li" href="#home" leftIcon={<FaHome />}>Home</Link>
          <Link as="li" href="#about" leftIcon={<FaInfoCircle />}>About</Link>
          <Link as="li" href="#tour" leftIcon={<FaMusic />}>Tour</Link>
          <Link as="li" href="#tickets" leftIcon={<FaTicketAlt />}>Tickets</Link>
        </VStack>
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="center" height="calc(100vh - 64px)">
        <Heading as="h2" size="2xl" textAlign="center" marginTop="20">Welcome to BandName's Official Website</Heading>
        <Text fontSize="xl" marginTop="5">Catch us live on tour!</Text>
        <Image src="https://via.placeholder.com/600x400" alt="Band Image" marginTop="5" boxShadow="2xl" borderRadius="md" />
      </Flex>
    </Box>
  );
};

export default Index;