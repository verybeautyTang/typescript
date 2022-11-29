
import  { Component,Vue,Prop } from 'vue-property-decorator'
@Component({
  name: 'todo-item'
})

interface Item {
  text: string,
  complete: boolean
}
export default class TodoItem extends Vue{
  @Prop(Object) public title: Item;
  @Prop(Number) public index: number;
}