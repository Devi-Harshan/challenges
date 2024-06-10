import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IUserInterface } from "../../shared/IUserDetails";
import ModalOpen from "../Modal/modal";
const CardData = () => {
  const [data, setData] = useState<IUserInterface[]>([]);
  const fetchData = () => {
    fetch("https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.users);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
    >
      {data
        .filter((e: IUserInterface, i: number) => i < 100)
        .map((dataFetched: IUserInterface) => (
          <Card key={dataFetched.id}>
            <CardBody>
              <Flex gap={1} justifyContent="center" alignItems="center">
                <Image
                  src={dataFetched?.avatar}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </Flex>

              <Stack mt="6" spacing="3">
                <Heading size="md">{`${dataFetched?.firstname}  ${dataFetched?.lastname}`}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="flex" justifyContent={"center"}>
              <ModalOpen dataFetched={dataFetched} />
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default CardData;
