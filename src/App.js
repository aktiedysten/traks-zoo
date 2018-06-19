import React from 'react';
import { Container, Form, FormGroup, InputGroup, Label, Input } from 'reactstrap';
import './App.css';
import { T, TraksConsumer } from './traks';

function ChangeLang(props) {
	const change = (e) => {
		props.set_lang(e.target.value);
	};
	return (
		<Form>
			<FormGroup>
				<InputGroup>
					<Label for="langselect">Language</Label>
					<Input id="langselect" type="select" name="select" onChange={change} defaultValue={props.lang}>
						<option value="en">English</option>
						<option value="da">Dansk</option>
					</Input>
				</InputGroup>
			</FormGroup>
		</Form>
	);
}

function Example(props) {
	return <div style={{backgroundColor: "#ddd", borderRadius: "5px", marginBottom: "1rem", padding: "0.5rem"}}>{props.children}</div>;
}

function Comment(props) {
	return <div style={{color: "#999", fontStyle: "italic", fontSize: "0.8rem"}}>({props.children})</div>;
}

function InlineComment(props) {
	return <span style={{color: "#999", fontStyle: "italic", fontSize: "0.8rem"}}>({props.children})</span>;
}

function UnreadMessages(props) {
	const count = props.count; // NOTE extracting count to avoid capturing the entire "props" variable
	return <div><T>You have {count} unread message(s)</T></div>;
}

export default function(props) {
	const name = "Mr. Anderson";
	return (
		<Container>
			<TraksConsumer><ChangeLang/></TraksConsumer>
			<Example>
				<T>Simple translation</T>
			</Example>
			<Example>
				<T>Hello, {name}! <Comment>The name, {name}, is dynamic</Comment></T>
			</Example>
			<Example>
				<UnreadMessages count={1}/>
				<UnreadMessages count={2}/>
				<UnreadMessages count={100}/>
				<UnreadMessages count={0}/>
				<Comment><T>You can handle singular/plural cases in translation code</T></Comment>
			</Example>
			<Example>
				<T context="file">Save</T> <InlineComment>&lt;T context="file"&gt;Save&lt;/T&gt;</InlineComment>
				<br/>
				<T context="money">Save</T> <InlineComment>&lt;T context="money"&gt;Save&lt;/T&gt;</InlineComment>
				<br/>
				<T context="soccer">Save</T> <InlineComment>&lt;T context="soccer"&gt;Save&lt;/T&gt;</InlineComment>
				<br/>
				<T context="jesus">Save</T> <InlineComment>&lt;T context="jesus"&gt;Save&lt;/T&gt;</InlineComment>
			</Example>
			<Example>
				<T>
					<div>You</div>
					<div>can</div>
					<div>also</div>
					<div>have</div>
					<div>multiline</div>
					<div>translations</div>
				</T>
			</Example>
			<Example>
				<T><input placeholder="Enter text here"/><Comment>To translate attributes, wrap the entire element in &lt;T&gt;</Comment></T>
			</Example>
		</Container>
	);
}
