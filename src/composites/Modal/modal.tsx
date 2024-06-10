import {
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  Image,
  Avatar,
  Box,
  Heading,
} from "@chakra-ui/react";

const ModalOpen = ({ dataFetched }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>View Details</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        id="modal"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader paddingBottom={0}>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={dataFetched?.avatar} src={dataFetched?.avatar} />

              <Box>
                <Heading size="sm">
                  {" "}
                  {`${dataFetched.firstname} ${dataFetched.lastname}`}
                </Heading>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={1} paddingTop={0}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="10">
                User Name :
              </GridItem>
              <GridItem w="100%" h="10">
                {dataFetched.username}
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="10">
                Email :
              </GridItem>
              <GridItem w="100%" h="10">
                {dataFetched.email}
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="10">
                Join Date :
              </GridItem>
              <GridItem w="100%" h="10">
                {dataFetched.join_date}
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="10">
                Role :
              </GridItem>
              <GridItem w="100%" h="10">
                {dataFetched.role}
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="10">
                Description :
              </GridItem>
              <GridItem w="100%">{dataFetched.description}</GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalOpen;
