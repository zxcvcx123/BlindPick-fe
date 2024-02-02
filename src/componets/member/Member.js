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
  const [memberPhone, setMemberPhone] = useState("");
  const [pwCheckClick, setPwCheckClick] = useState(false);
  const [emailCheckClick, setEmailCheckClick] = useState(false);
  const [phoneCheckClick, setPhoneCheckClick] = useState(false);

  // 가입하기
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

  // 비밀번호 표시 버튼
  function formPwView(event) {
    const pwCheck = document.getElementById("memberPassword");

    if (pwCheckClick === false) {
      setPwCheckClick(true);
      pwCheck.type = "text";
    }

    if (pwCheckClick === true) {
      setPwCheckClick(false);
      pwCheck.type = "password";
    }
  }

  // 이름, 아이디, 비밀번호 클릭
  function formClick(event) {
    const myDiv = event.currentTarget; // form 타이틀명
    const myDivChild = event.currentTarget.children; // form 자식들

    // form 타이틀명 변환
    myDiv.style.cssText = "display: block;";

    // form 제목 스타일
    myDivChild[0].style.cssText = "font-size: 1rem;";

    // Input 스타일
    myDivChild[1].style.cssText = "display: block; height: 32px";
  }

  // 이메일, 휴대전화번호 클릭
  function formBtnClick(event) {
    const myDiv = event.currentTarget; // form 타이틀명
    const myDivChild = event.currentTarget.children; // form 자식들
    const myDivChildToChild = myDivChild[0].children; // form 자식의 자식

    // form 타이틀명 변환
    myDivChild[0].style.cssText = "display: block;";

    // form 제목 스타일
    myDivChildToChild[0].style.cssText = "font-size: 1rem;";

    // Input 스타일
    myDivChildToChild[1].style.cssText = "display: block; height: 32px";
  }

  // 인증번호 전송
  function checkBtnClickHandler(value) {
    const mainFormLayout = document.getElementById("form_out_box");
    let mainFormHeight = mainFormLayout.offsetHeight;
    const codeEmail = document.getElementById("form_code_email");
    const codePhone = document.getElementById("form_code_phone");

    if (value === "email") {
      codeEmail.style.cssText = "display: block";
      mainFormLayout.style.height = mainFormHeight + 50 + "px";
    }

    if (value === "phone") {
      codePhone.style.cssText = "display: block";
      mainFormLayout.style.height = mainFormHeight + 50 + "px";
    }
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
            w={"100%"}
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
            w={"180px"}
            justifyContent={"center"}
            border={"0px"}
          >
            <Box
              className={"form_text"}
              display={"flex"}
              alignItems={"center"}
              onClick={(e) => formPwView(e)}
            >
              {pwCheckClick === false && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#afb0b2" }}
                />
              )}
              {pwCheckClick === true && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#4000ff" }}
                />
              )}
              <Text color={pwCheckClick === true && "blue"}>표시</Text>
            </Box>
          </Box>
        </Flex>

        {/* 이메일 */}
        <Box
          className={"form_area"}
          w={"100%"}
          onClick={(e) => formBtnClick(e)}
        >
          <Box display={"flex"} alignItems={"center"} h={"100%"} w={"100%"}>
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
          <Box w={"159px"}>
            <Button
              borderLeft={"1px #afb0b2 solid"}
              borderRadius={"0px"}
              h={"68px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"1.25rem"}
              data-value={"email"}
              onClick={(e) =>
                checkBtnClickHandler(e.currentTarget.getAttribute("data-value"))
              }
            >
              <Text>인증번호 전송</Text>
            </Button>
          </Box>
        </Box>

        <Box className={"form_area"} id={"form_code_email"} h={"50px"}>
          <Input
            placeholder="메일 인증번호 입력"
            h={"100%"}
            textIndent={"5px"}
            fontSize={"1rem"}
            borderRadius={"0px"}
            variant={"unstyled"}
            border={"0px"}
          />
        </Box>

        {/* 휴대전화 번호 */}
        <Box
          className={"form_area"}
          w={"100%"}
          onClick={(e) => formBtnClick(e)}
        >
          <Box display={"flex"} alignItems={"center"} h={"100%"} w={"100%"}>
            <label for="memberPhone" className={"form_text"}>
              휴대전화번호<span className={"form_star"}>*</span>
            </label>
            <Box display={"none"} h={"50px"}>
              <Input
                id="memberPhone"
                type="text"
                h={"100%"}
                textIndent={"5px"}
                fontSize={"1rem"}
                borderRadius={"0px"}
                variant={"unstyled"}
                border={"0px"}
                onChange={(e) => setMemberPhone(e.target.value)}
              />
            </Box>
          </Box>
          <Box w={"159px"}>
            <Button
              borderLeft={"1px #afb0b2 solid"}
              borderRadius={"0px"}
              h={"68px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"1.25rem"}
              data-value={"phone"}
              onClick={(e) =>
                checkBtnClickHandler(e.currentTarget.getAttribute("data-value"))
              }
            >
              <Text>인증번호 전송</Text>
            </Button>
          </Box>
        </Box>

        <Box className={"form_area"} id={"form_code_phone"} h={"50px"}>
          <Input
            placeholder="휴대전화 인증번호 입력"
            h={"100%"}
            textIndent={"5px"}
            fontSize={"1rem"}
            borderRadius={"0px"}
            variant={"unstyled"}
            border={"0px"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Member;
