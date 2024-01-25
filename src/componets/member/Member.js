import React from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";

function Member(props) {
  function addMemberHandler() {
    axios.post("/addmember");
  }

  return (
    <Box>
      <Button onClick={() => addMemberHandler()}>가입</Button>
    </Box>
  );
}

export default Member;
