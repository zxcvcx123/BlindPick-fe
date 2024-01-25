import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();

  return (
    <Box>
      <Button onClick={() => navigate("/member")}>회원가입</Button>
    </Box>
  );
}

export default Nav;
