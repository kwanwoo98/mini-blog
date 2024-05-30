import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

const Wrapper=styled.div`
    padding : 1px;
    width : calc(100%-32px);
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const Container = styled.div`
    width : 100%;
    max-width:720px;

    :not(:last-child){
        margin-bottom:16px;
    }
`;

function PostWritePage(props){
    const navigate = useNavigate();
    const [title,setTitle]=useState("");
    const [content, setContent]=useState("");

    return(
        <Wrapper>
            <Container>
                <TextInput height={20} value={title} onChange={(event)=>{
                    setTitle(event.target.value)
                }}/>
                <TextInput height={240} value={content} onChange={(event)=>{
                    setContent(event.target.value)
                }}/>
                <Button title="작성하기" onClick={()=>navigate("/")}/>
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;