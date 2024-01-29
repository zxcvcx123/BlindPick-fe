import React, { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Member(props) {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberBirth, setMemberBirth] = useState("");
  function addMemberHandler() {
    axios.post("/addmember", {});
  }

  return (
    <Box w={"30%"} m={"5% auto"}>
      <Flex>
        <Text w={"35%"} fontSize={"1.5rem"} textAlign={"end"} mr={"1%"}>
          아이디
        </Text>
        <Input
          w={"65%"}
          onChange={(e) => setMemberId(e.target.value)}
          value={memberId}
        />
      </Flex>
      <Flex mt={"2%"}>
        <Text w={"35%"} fontSize={"1.5rem"} textAlign={"end"} mr={"1%"}>
          비밀번호
        </Text>
        <Input
          w={"65%"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Flex>
      <Flex mt={"2%"}>
        <Text w={"35%"} fontSize={"1.5rem"} textAlign={"end"} mr={"1%"}>
          비밀번호 확인
        </Text>
        <Input
          w={"65%"}
          type="password"
          onChange={(e) => setCheckPassword(e.target.value)}
          value={checkPassword}
        ></Input>
      </Flex>
      <Flex mt={"2%"}>
        <Text w={"35%"} fontSize={"1.5rem"} textAlign={"end"} mr={"1%"}>
          이름
        </Text>
        <Input
          w={"65%"}
          onChange={(e) => setMemberName(e.target.value)}
          value={memberName}
        ></Input>
      </Flex>
      <Flex mt={"2%"}>
        <Text w={"35%"} fontSize={"1.5rem"} textAlign={"end"} mr={"1%"}>
          이메일
        </Text>
        <Input
          w={"65%"}
          onChange={(e) => setMemberEmail(e.target.value)}
          value={memberEmail}
        ></Input>
      </Flex>
      <Flex mt={"2%"}>
        <Text w={"35%"} fontSize={"1.5rem"} textAlign={"end"} mr={"1%"}>
          생년월일
        </Text>
        <Input
          w={"65%"}
          type="date"
          onChange={(e) => setMemberBirth(e.target.value)}
          value={memberBirth}
        ></Input>
      </Flex>
      <Flex justifyContent={"flex-end"}>
        <Button mt={"2%"} onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button ml={"1%"} mt={"2%"} onClick={() => addMemberHandler()}>
          가입
        </Button>
      </Flex>
    </Box>
  );
}

export default Member;
