import React, { useContext, useEffect } from "react";
import member, { MemberRegexContext } from "./Member";

function FormRegex(props) {
  const {
    memberId,
    memberPassword,
    memberName,
    memberEmail,
    memberPhone,
    setMemberNameRegex,
    setMemberIdRegex,
    setMemberPwRegex,
    setMemberEmailRegex,
    setMemberPhoneRegex,
  } = useContext(MemberRegexContext);

  // 이름 정규식 (한글 2~5글자)
  const nameRegex = /^[가-힣]{2,5}$/;
  // 아이디 정규식 (6~20자리, 첫글자 숫자 X)
  const idRegex = /^[a-z]+[a-z0-9]{5,19}$/;
  // 비밀번호 정규식 (영문, 숫자, 특수문자 조합으로 이루어진 8~16자)
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  // 이메일 정규식
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  // 휴대전화번호 정규식
  const phoneRegex = /^\d{3}-?\d{3,4}-?\d{4}$/;

  useEffect(() => {
    // 이름 정규식 검증 로직
    if (nameRegex.test(memberName)) {
      setMemberNameRegex(true);
    } else {
      setMemberNameRegex(false);
    }

    // 아이디 정규식 검증 로직
    if (idRegex.test(memberId)) {
      setMemberIdRegex(true);
    } else {
      setMemberIdRegex(false);
    }

    // 비밀번호 정규식 검증 로직
    if (pwRegex.test(memberPassword)) {
      setMemberPwRegex(true);
    } else {
      setMemberPwRegex(false);
    }

    // 이메일 정규식 검증 로직
    if (emailRegex.test(memberEmail)) {
      setMemberEmailRegex(true);
    } else {
      setMemberEmailRegex(false);
    }

    // 휴대전화 정규식 검증 로직
    if (phoneRegex.test(memberPhone)) {
      setMemberPhoneRegex(true);
    } else {
      setMemberPhoneRegex(false);
    }
  }, [memberName, memberId, memberPassword, memberEmail, memberPhone]);

  return <div></div>;
}

export default FormRegex;
