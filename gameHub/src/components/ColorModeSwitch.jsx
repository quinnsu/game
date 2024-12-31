import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"


const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        {/* whitespace: css原生属性 控制元素内的文本换行和空白处理方式> */}
        <Text whiteSpace={'nowrap'}>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
