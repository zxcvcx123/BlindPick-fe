import React, { createContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/member/memberForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import FormRegex from "./FormRegex";

export const MemberRegexContext = createContext(null);

function Member(props) {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberPhone, setMemberPhone] = useState("");

  // 인증번호
  const [pwCheckClick, setPwCheckClick] = useState(false);
  const [emailCheckClick, setEmailCheckClick] = useState(false);
  const [phoneCheckClick, setPhoneCheckClick] = useState(false);

  // 정규식 t/f
  const [memberNameRegex, setMemberNameRegex] = useState(false);
  const [memberIdRegex, setMemberIdRegex] = useState(false);
  const [memberPwRegex, setMemberPwRegex] = useState(false);
  const [memberEmailRegex, setMemberEmailRegex] = useState(false);
  const [memberPhoneRegex, setMemberPhoneRegex] = useState(false);

  // 정규식 regexBox 경고창에 따라 제일 바깥 박스 높이 줄이고 늘리고
  let regexBox = document.getElementsByClassName("regexBox");

  // 가입하기
  function addMemberHandler() {
    axios
      .post("/member/save", {
        memberId: memberId,
        memberPw: memberPassword,
        checkPassword: checkPassword,
        memberName: memberName,
        memberEmail: memberEmail,
        memberPhone: memberPhone,
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

  // 이름, 아이디, 비밀번호, 이메일, 휴대전화번호 클릭
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

  // 인증번호 전송
  function checkBtnClickHandler(value) {
    // 제일 바깥 박스
    const mainFormLayout = document.getElementById("form_out_box");
    // 제일 바깥 박스 높이
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
    <Box>
      {/* 정규식 검증 */}
      <MemberRegexContext.Provider
        value={{
          memberId,
          memberPassword,
          checkPassword,
          memberName,
          memberEmail,
          memberPhone,
          setMemberNameRegex,
          setMemberIdRegex,
          setMemberPwRegex,
          setMemberEmailRegex,
          setMemberPhoneRegex,
        }}
      >
        <FormRegex />
      </MemberRegexContext.Provider>
      {/* ========== */}
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
              {memberName.length > 0 && !memberNameRegex && (
                <span style={{ color: "#ed0202" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    style={{ color: "#ed0202" }}
                  />{" "}
                  이름 형식을 확인해주세요! (한글, 2~5글자)
                </span>
              )}
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
                onChange={(e) => {
                  console.log(regexBox.length);
                  setMemberName(e.target.value);
                }}
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
              아이디<span className={"form_star"}>*</span>{" "}
              {memberId.length > 0 && !memberIdRegex && (
                <span style={{ color: "#ed0202" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    style={{ color: "#ed0202" }}
                  />{" "}
                  아이디 형식을 확인해주세요! (6~20자리, 첫글자 숫자 X)
                </span>
              )}
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
          <Box className={"form_area"} w={"100%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              h={"100%"}
              w={"100%"}
              onClick={(e) => formClick(e)}
            >
              <label htmlFor="memberPassword" className={"form_text"}>
                비밀번호(8~16자의 영문,숫자,특수기호)
                <span className={"form_star"}>*</span>{" "}
                {memberPassword.length > 0 && !memberPwRegex && (
                  <span style={{ color: "#ed0202" }}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      style={{ color: "#ed0202" }}
                    />{" "}
                    비밀번호 형식을 확인해주세요! (8~16자의 영문,숫자,특수기호)
                  </span>
                )}
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
                  onChange={(e) => setMemberPassword(e.target.value)}
                  value={memberPassword}
                />
              </Box>
            </Box>
            <Box w={"180px"} display={"flex"} justifyContent={"center"}>
              <Button
                borderRadius={"0px"}
                h={"68px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"1.25rem"}
                variant={"unstyled"}
                value={pwCheckClick}
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
              </Button>
            </Box>
          </Box>
          {/* 이메일 */}
          <Box className={"form_area"} w={"100%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              h={"100%"}
              w={"100%"}
              onClick={(e) => formClick(e)}
            >
              <label for="memberEmail" className={"form_text"}>
                이메일<span className={"form_star"}>*</span>
                {memberEmail.length > 0 && !memberEmailRegex && (
                  <span style={{ color: "#ed0202" }}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      style={{ color: "#ed0202" }}
                    />{" "}
                    올바른 이메일 형식을 확인해주세요!
                  </span>
                )}
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
            <Box w={"180px"}>
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
                  checkBtnClickHandler(
                    e.currentTarget.getAttribute("data-value"),
                  )
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
          <Box className={"form_area"} w={"100%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              h={"100%"}
              w={"100%"}
              onClick={(e) => formClick(e)}
            >
              <label for="memberPhone" className={"form_text"}>
                휴대전화번호<span className={"form_star"}>*</span>
                {memberPhone.length > 0 && !memberPhoneRegex && (
                  <span style={{ color: "#ed0202" }}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      style={{ color: "#ed0202" }}
                    />{" "}
                    올바르지 못한 휴대전화번호 형식!( - 없이 작성)
                  </span>
                )}
              </label>
              <Box display={"none"} h={"50px"}>
                <Input
                  id="memberPhone"
                  type="text"
                  h={"100%"}
                  textIndent={"5px"}
                  fontSize={"1.75rem"}
                  borderRadius={"0px"}
                  variant={"unstyled"}
                  border={"0px"}
                  onChange={(e) => setMemberPhone(e.target.value)}
                />
              </Box>
            </Box>
            <Box w={"180px"}>
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
                  checkBtnClickHandler(
                    e.currentTarget.getAttribute("data-value"),
                  )
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
      <Box
        _hover={"cursor: pointer"}
        border={"1px #3399ff solid"}
        w={"80%"}
        h={"80px"}
        m={"-40px auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"#3399ff"}
      >
        <button style={{ width: "100%", height: "100%" }}>
          <Heading color={"white"}>가입하기</Heading>
        </button>
      </Box>
    </Box>
  );
}

export default Member;
