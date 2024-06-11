import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { IUserInterface } from "../../shared/IUserDetails";
import ModalOpen from "../Modal/modal";
import clsx from "clsx";
import useLazyLoad from "../../hooks/useLazyLoad";
const CardData = () => {
  const [data, setData] = useState<IUserInterface[]>([]);
  const triggerRef = useRef(null);

  const NUM_PER_PAGE = 12;
  const TOTAL_PAGES = Math.ceil(data.length % NUM_PER_PAGE);
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

  const onGrabData = (currentPage: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data2 = data.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(data2);
      }, 1000);
    });
  };
  const { data: lazyLoadedData, loading } = useLazyLoad({
    triggerRef,
    onGrabData,
  });
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
      >
        {lazyLoadedData.map((dataFetched: IUserInterface) => (
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
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        <Skeleton isLoaded={loading}></Skeleton>
      </div>
    </>
  );
};

export default CardData;
