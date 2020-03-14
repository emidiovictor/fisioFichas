import React from "react";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea,
  Breadcrumb,
  Segment,
  Form,
  Header,
  Divider
} from "semantic-ui-react";
import { FastField, Formik } from "formik";
import { TextInput } from "../../commons/forms/text/TextInput";
export const CreateFicha = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Fichas</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Novo</Breadcrumb.Section>
      </Breadcrumb>
      <Segment>
        <Header>Ficha de Avaliação</Header>
        <Formik
          initialValues={{}}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} size="small">
              <Segment>
                <Header>Dados Paciente</Header>
                <Divider />

                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Nome"
                    name="nome"
                    width={12}
                  />
                  <FastField
                    component={TextInput}
                    label="Data Nascimento"
                    name="dataNascimento"
                    width={4}
                  />
                </Form.Group>

                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Telefone 1"
                    name="telefone"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Telefone 2"
                    name="peso"
                    width={4}
                  />
                </Form.Group>
              </Segment>
              <Segment>
                <Header>Dados Avaliação</Header>
                <Divider />

                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Peso"
                    name="PESO"
                    width={12}
                  />
                  <FastField
                    component={TextInput}
                    label="Estatura"
                    name="estatura"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="IMC"
                    name="imc"
                    disabled
                    width={4}
                  />
                </Form.Group>
              </Segment>
              <Segment>
                <Header>Avaliação do fator ambiente/tarefas</Header>
                <Divider />

                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Postura mais comum"
                    name="posturaMaisComum"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Tipo de assento"
                    name="tipoDeAssento"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Atividade em casa"
                    name="atividadeEmCasa"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Tempo de sono"
                    name="tempoDeSono"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Posição do sono"
                    name="Posicao do sono"
                    width={4}
                  />
                </Form.Group>
              </Segment>
              <Segment>
                <Header>Avaliação do fator Laboral</Header>
                <Divider />

                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Horas de trabalho"
                    name="horasDeTrabalho"
                    width={5}
                  />
                  <FastField
                    component={TextInput}
                    label="Postura de trabalho"
                    name="posturaDeTrabalho"
                    width={5}
                  />
                  <FastField
                    component={TextInput}
                    label="Nível de tensão da tarefa"
                    name="nivelTensaoTarefa"
                    width={4}
                  />
                </Form.Group>
              </Segment>
              <Segment>
                <Header>Avaliação fator atividade física</Header>
                <Divider />

                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Tipo de atividade física"
                    name="tipoDeAtividadeFisica"
                    width={5}
                  />
                  <FastField
                    component={TextInput}
                    label="Duração diária"
                    name="duracaoDiaria"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Duração Semanal"
                    name="duracaoSemanal"
                    width={3}
                  />
                </Form.Group>
                <Form.Group>
                  <FastField
                    component={TextInput}
                    label="Tempo de prática"
                    name="tempoDePatrica"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Razão da prática"
                    name="razaoDaPratica"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Tipo de orientação profissional"
                    name="tipoDeOrientacaoProfissional"
                    width={4}
                  />
                  <FastField
                    component={TextInput}
                    label="Nível Satisfacao 1 a 10"
                    name="nivelSastifacao"
                    width={4}
                  />
                </Form.Group>
              </Segment>

              <button type="submit">LA VAI</button>
            </Form>
          )}
        </Formik>
      </Segment>
    </>
  );
};
