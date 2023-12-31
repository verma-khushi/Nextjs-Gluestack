import { Box, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
import recommendeddata from "../../../data/recommendedtopics.json";
import { useAuth } from "@/app/context/store";
export default function Recommendedtopics() {
  const { setTag } = useAuth();
  function Recommendedsection() {
    return recommendeddata;
  }
  const data = Recommendedsection();

  
  const handleTagClick = (title: string) => {
    setTag(title);
    console.log("Clicked tag:", title);
  };
  return (
    <Box paddingTop={"$4"}>
      <Heading
        fontSize={"$md"}
        position="relative"
        top={"$2"}
        fontWeight={"$500"}
      >
        Recommended topics
      </Heading>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        maxWidth={250}
        columnGap={"$1.5"}
        minHeight={100}
      >
        {data.map((data) => (
          <Text
            key={data.title}
            backgroundColor="#F2F2F2"
            padding={"$2"}
            borderRadius={"$3xl"}
            color="$black"
            maxWidth={120}
            marginTop={"$4"}
          >
            <Text
              marginLeft={"$1"}
              fontSize={"$sm"}
              onPress={() => handleTagClick(data.title)}
            >
              {data.title}
            </Text>
          </Text>
        ))}
      </Box>
      <Text color="#1A8917" fontSize={"$sm"} paddingTop={"$6"}>
        See more topics
      </Text>
    </Box>
  );
}
