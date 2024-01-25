import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Tooltip,
  Progress,
  ChakraProvider,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { SiLeetcode } from "react-icons/si";

function Leetcode() {
  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 0,
    totalQuestions: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://leetcode-api-faisalshohag.vercel.app/sankalp_barriar"
        );
        const data = await res.json();

        setLeetcodeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculatePercentage = () => {
    return (
      (leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100
    ).toFixed(2);
  };

  return (
    <div id="leetcode">
      <section>
        <h2>Leetcode Stats</h2>
        <div>
          <div className="div1">
            <Tooltip isOpen={isHovered} placement="top">
              <CircularProgress
                size="250px"
                value={
                  (leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100
                }
                max={100}
                thickness="4px"
                color="orange"
                trackColor="gray"
                transition="0.3s ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CircularProgressLabel color={"white"} fontSize={50}>
                  {isHovered
                    ? calculatePercentage() + "%"
                    : leetcodeData.totalSolved}
                </CircularProgressLabel>
              </CircularProgress>
            </Tooltip>
            <Box>
              <a href="https://leetcode.com/sankalp_barriar/" target="_blank">
                <SiLeetcode  />
              </a>
            </Box>
          </div>
          <div className="div2">
            <ChakraProvider>
              <Stack spacing={3}>
                <Flex align="center">
                  <Text fontSize="lg" color={"white"} marginRight="2">
                    Easy
                  </Text>
                  <Text fontSize="lg" color={"rgba(255, 255, 255, 0.7)"} marginLeft="2">
                    {`${leetcodeData.easySolved} / ${leetcodeData.totalEasy}`}
                  </Text>
                </Flex>
                <Progress
                  colorScheme="green"
                  size="lg"
                  value={(leetcodeData.easySolved / leetcodeData.totalEasy) * 100}
                  height="30px"
                />

                <Flex align="center">
                  <Text fontSize="lg" color={"white"} marginRight="2">
                    Medium
                  </Text>
                  <Text fontSize="lg" color={"rgba(255, 255, 255, 0.7)"} marginLeft="2">
                    {`${leetcodeData.mediumSolved} / ${leetcodeData.totalMedium}`}
                  </Text>
                </Flex>
                <Progress
                  colorScheme="yellow"
                  size="lg"
                  value={
                    (leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100
                  }
                  height="30px"
                />

                <Flex align="center">
                  <Text fontSize="lg" color={"white"} marginRight="2">
                    Hard
                  </Text>
                  <Text fontSize="lg" color={"rgba(255, 255, 255, 0.7)"} marginLeft="2">
                    {`${leetcodeData.hardSolved} / ${leetcodeData.totalHard}`}
                  </Text>
                </Flex>
                <Progress
                  colorScheme="red"
                  size="lg"
                  value={(leetcodeData.hardSolved / leetcodeData.totalHard) * 100}
                  height="30px"
                />
              </Stack>
            </ChakraProvider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leetcode;
