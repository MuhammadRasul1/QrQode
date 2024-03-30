import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "services/queryClient";
import { ChakraProvider, theme } from "@chakra-ui/react";

function App() {
  return <ChakraProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </ChakraProvider>; 
}

export default App;
