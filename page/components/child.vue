<template>
    <el-select             
        v-model="value" 
        placeholder="请选择" 
        class="choose" 
        size="mini" 
        clearable 
        filterable
    >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>
  
<script>
export default {
    data() {
        return {
            options: [
                {
                    value: '123',
                    label: '老王'
                },
                {
                    value: '234',
                    label: '王老吉'
                },
                {
                    value: '345',
                    label: '荣耀王者'
                },
                {
                    value: '456',
                    label: '王妃'
                },
                {
                    value: '567',
                    label: '大王带小王'
                },
            ],
            value: ''
        }
    }
}
</script>