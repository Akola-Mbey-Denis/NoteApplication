import reducer, {notesActions} from '../slice'
import {nanoid} from 'nanoid';
import faker from 'faker';
const data= {
    id: nanoid(),
    createdAt: Date.now(),
    title: faker.lorem.words(),
    text: faker.lorem.sentences(),
    favorite: faker.datatype.boolean(),
  }
 
const newData =
    { id: nanoid(),
     createdAt: Date.now(),
     title: faker.lorem.words(),
     text: faker.lorem.sentences(),
     favorite: faker.datatype.boolean(),
}

   



test('should return the initial state', () => {
  expect(reducer(undefined, notesActions.addNote({}))).toEqual([{}])
})


test('should handle a node being added to an empty list', () => {
  const previousState = []

  expect(reducer(previousState, notesActions.addNote(data))).toEqual([data])
})


test('should handle a node being added to an existing list', () => {
  const previousState = [data]
  
 
  expect(reducer(previousState, notesActions.addNote(newData))).toEqual([data, newData])
})