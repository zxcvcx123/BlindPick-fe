import React, { useState } from "react";
import { Box, Button, Flex, Input, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/member/memberForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
function Member(props) {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberBirth, setMemberBirth] = useState("");
  function addMemberHandler() {
    axios
      .post("/member/save", {
        memberId: memberId,
        memberPw: memberPassword,
        checkPassword: checkPassword,
        memberName: memberName,
        memberEmail: memberEmail,
        memberBirth: memberBirth,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch()
      .finally();
  }

  function formClick(event) {
    const myDiv = event.currentTarget; // form 타이틀명
    const myDivChild = event.currentTarget.children; // form 자식들

    // form 타이틀명 변환
    myDiv.style.cssText = "display: block;";

    console.log(myDivChild[0]);
    console.log(myDivChild[1]);

    // form 제목 스타일
    myDivChild[0].style.cssText = "font-size: 1rem;";

    // Input 스타일
    myDivChild[1].style.cssText = "display: block; height: 32px";
  }

  return (
    <Box
      id={"form_out_box"}
      border={"1px #afb0b2 solid"}
      w={"80%"}
      h={"500px"}
      m={"50px auto"}
    >
      {/* TODO: 로고 및 소셜 로그인 넣기 */}
      {/* 내부 회원가입 폼 시작 */}
      <Box m={"20px 20px"}>
        <Flex justifyContent={"space-between"}>
          <Text className={"top_title"}>회원가입</Text>
          <Flex alignItems={"flex-end"}>
            <Text className="top_star">*</Text>
            <Text className="top_text">필수 입력 정보입니다.</Text>
          </Flex>
        </Flex>

        {/* 이름 */}
        <Box onClick={(e) => formClick(e)} className={"form_area"}>
          <label for="memberName" className={"form_text"}>
            이름(실명)<span className={"form_star"}>*</span>
          </label>
          <Box display={"none"}>
            <Input
              id="memberName"
              type="text"
              h={"100%"}
              textIndent={"5px"}
              fontSize={"1.75rem"}
              borderRadius={"0px"}
              variant={"unstyled"}
              border={"0px"}
              onChange={(e) => setMemberName(e.target.value)}
              value={memberName}
            />
          </Box>
        </Box>

        {/* 아이디 */}
        <Box
          className={"form_area"}
          onClick={(e) => formClick(e)}
          className={"form_area"}
        >
          <label for="memberId" className={"form_text"}>
            아이디<span className={"form_star"}>*</span>
          </label>
          <Box display={"none"}>
            <Input
              id="memberId"
              type="text"
              h={"100%"}
              textIndent={"5px"}
              fontSize={"1.75rem"}
              borderRadius={"0px"}
              variant={"unstyled"}
              border={"0px"}
              onChange={(e) => setMemberId(e.target.value)}
              value={memberId}
            />
          </Box>
        </Box>

        {/* 비밀번호 */}
        <Flex>
          <Box
            className={"form_area"}
            w={"92%"}
            onClick={(e) => formClick(e)}
            className={"form_area"}
          >
            <label for="memberPassword" className={"form_text"}>
              비밀번호(8~16자의 영문,숫자,특수기호)
              <span className={"form_star"}>*</span>
            </label>
            <Box display={"none"}>
              <Input
                id="memberPassword"
                type="password"
                h={"100%"}
                textIndent={"5px"}
                fontSize={"1.75rem"}
                borderRadius={"0px"}
                variant={"unstyled"}
                border={"0px"}
                onChange={(e) => setMemberPassword(e.target.value)}
                value={memberPassword}
              />
            </Box>
          </Box>
          {/* 표시 */}
          <Box
            className={"form_area"}
            w={"160px"}
            justifyContent={"center"}
            border={"0px"}
          >
            <Box className={"form_text"} display={"flex"} alignItems={"center"}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ borderColor: "#afb0b2" }}
              />
              <Text>표시</Text>
            </Box>
          </Box>
        </Flex>

        {/* 이메일 */}
        {/* TODO: 여기서 부터 시작 */}
        <Box className={"form_area"}>
          <Box display={"flex"} onClick={(e) => formClick(e)}>
            <label for="memberEmail" className={"form_text"}>
              이메일<span className={"form_star"}>*</span>
            </label>
            <Box display={"none"}>
              <Input
                id="memberEmail"
                type="text"
                h={"100%"}
                textIndent={"5px"}
                fontSize={"1.75rem"}
                borderRadius={"0px"}
                variant={"unstyled"}
                border={"0px"}
                onChange={(e) => setMemberEmail(e.target.value)}
                value={memberEmail}
              />
            </Box>
          </Box>
          <Button
            borderLeft={"1px #afb0b2 solid"}
            borderRadius={"0px"}
            h={"68px"}
            w={"159px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"1.25rem"}
          >
            <Text>인증번호 전송</Text>
          </Button>
        </Box>

        <Box className={"form_area"} id={"form_code_email"}>
          <Text className={"form_text"}>
            메일 인증번호 입력<span className={"form_star"}>*</span>
          </Text>
        </Box>

        <Box className={"form_area"} justifyContent={"space-between"}>
          <Flex>
            <Text className={"form_text"}>
              휴대전화번호<span className={"form_star"}>*</span>
            </Text>
          </Flex>
          <Button
            borderLeft={"1px #afb0b2 solid"}
            borderRadius={"0px"}
            h={"68px"}
            w={"159px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"1.25rem"}
          >
            <Text>인증번호 전송</Text>
          </Button>
        </Box>

        <Box className={"form_area"} id={"form_code_phone"}>
          <Text className={"form_text"}>
            휴대전화 인증번호 입력<span className={"form_star"}>*</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Member;
