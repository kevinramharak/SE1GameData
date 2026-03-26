
# Remaining data to mine from .exe

## Check script functions
`DataClass#SetEventNames` contains the names and descriptions of all check fns. `CheckTypeCount = 265`

## Exec script functions
`DataClass#SetEventNames` contains the names and descriptions of all exec fns. `ExecTypeCount = 362`

## Rule var names and descriptions
`DataClass#SetDefaultRules` contains the 'default' rules, whatever that means. It also contains all the names of the rules, in the same SoA structure as `RuleVar` and `RuleGroup`, but its not serialized.

```cs
public class DataClass
{
  int[] RuleGroup;
  float[] RuleVar;
  [NonSerializable]
  string[] RuleString;

}
```

## CommandClass
Figure out how CommandClass works to deserialize its compressed/stringified data back to something readable and moddable


