import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Verifique se as credenciais são válidas e chame onLogin se forem

    // Exemplo básico apenas para demonstração
    if (username === "admin" && password === "admin") {
      onLogin();
    } else {
      // Se as credenciais forem inválidas, abra o modal
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.200"
    >
      <Box width="400px">
        <FormControl>
          <Box p="4" bg="gray.100" borderRadius="md" boxShadow="md">
            <FormLabel alignItems="center">Login</FormLabel>
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button colorScheme="blue" mt="4" onClick={handleLogin}>
              Entrar
            </Button>
          </Box>
        </FormControl>
      </Box>

      {/* Modal de aviso para credenciais inválidas */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Erro de Autenticação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Credenciais inválidas. Por favor, verifique seu nome de usuário e
            senha.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;