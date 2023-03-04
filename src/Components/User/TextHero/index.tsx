import { Flex, Heading } from "@chakra-ui/react";
import styles from "./hero.module.sass";
const HeroText = () => (
  <Flex
    px="5"
    alignItems="center"
    className={styles.text__container}
    flexDirection={["column", "column", "row", "row"]}
  >
    <Heading
      as="h1"
      size={["2xl", "2xl", "2xl", "3xl"]}
      className={styles.text__left}
    >
      Ready to Explore the Fascinating Beauty of Jammu and Kashmir
    </Heading>
    <Heading
      as="h4"
      size="md"
      className={styles.text__right}
      w={["100%", "80%", "60%", "40%"]}
      position={["unset", "unset", "unset", "absolute"]}
    >
      Boost and lift up your mood with a vacation in the most comfortable and
      best place in the world
    </Heading>
  </Flex>
);

export default HeroText;
