<template>
    <div>   
        <table class="table">
            <caption>基本的表格布局</caption>
            <!--<button v-on:click="getData">获取数据</button>-->
                <thead>
                    <tr>
                        <th>{{tableId}}</th>
                        <th>{{tableName}}</th>
                        <th>{{tablePrice}}</th>
                        <th>{{tableImg}}</th>  
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="item in respDatas">
                         <td>{{ item.productId }}</td>
                         <td>{{ item.productName }}</td>
                         <td>{{ item.productPrice }}</td>
                         <td>{{ item.productImg }}</td>
                     </tr>
              </tbody>
     </table>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                tableId:"ID",
                tableName:"名称",
                tablePrice:"价格",
                tableImg:"个数",
                respDatas:[]
           }
        },
        mounted(){
                $.ajax({
                    type:"get",
                    url:"/goods",
                    success:function(resp){
                        this.respDatas=resp.result;
                        // console.log(this.respDatas.productPrice);
                        this.respDatas.forEach(function(index,item){
                            console.log(index);
                            console.log(index.productPrice);
                    });
                    }.bind(this)
             });
        }
     
    }
</script>

<style lang="">
    th{
        text-align:center;
    }
</style>