/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableDateTimeFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  NullableFloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: number | null; // Float
    notIn?: number[] | null; // [Float!]
  }
  NullableIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  exerciseCreateOneWithoutExercise_instanceInput: { // input type
    connect?: NexusGenInputs['exerciseWhereUniqueInput'] | null; // exerciseWhereUniqueInput
    create?: NexusGenInputs['exerciseCreateWithoutExercise_instanceInput'] | null; // exerciseCreateWithoutExercise_instanceInput
  }
  exerciseCreateWithoutExercise_instanceInput: { // input type
    label: string; // String!
    name: string; // String!
  }
  exerciseUpdateInput: { // input type
    exercise_instance?: NexusGenInputs['exercise_instanceUpdateManyWithoutExerciseInput'] | null; // exercise_instanceUpdateManyWithoutExerciseInput
    id?: number | null; // Int
    label?: string | null; // String
    name?: string | null; // String
  }
  exerciseUpdateOneRequiredWithoutExercise_instanceInput: { // input type
    connect?: NexusGenInputs['exerciseWhereUniqueInput'] | null; // exerciseWhereUniqueInput
    create?: NexusGenInputs['exerciseCreateWithoutExercise_instanceInput'] | null; // exerciseCreateWithoutExercise_instanceInput
    update?: NexusGenInputs['exerciseUpdateWithoutExercise_instanceDataInput'] | null; // exerciseUpdateWithoutExercise_instanceDataInput
    upsert?: NexusGenInputs['exerciseUpsertWithoutExercise_instanceInput'] | null; // exerciseUpsertWithoutExercise_instanceInput
  }
  exerciseUpdateWithoutExercise_instanceDataInput: { // input type
    id?: number | null; // Int
    label?: string | null; // String
    name?: string | null; // String
  }
  exerciseUpsertWithoutExercise_instanceInput: { // input type
    create: NexusGenInputs['exerciseCreateWithoutExercise_instanceInput']; // exerciseCreateWithoutExercise_instanceInput!
    update: NexusGenInputs['exerciseUpdateWithoutExercise_instanceDataInput']; // exerciseUpdateWithoutExercise_instanceDataInput!
  }
  exerciseWhereInput: { // input type
    AND?: NexusGenInputs['exerciseWhereInput'][] | null; // [exerciseWhereInput!]
    exercise_instance?: NexusGenInputs['exercise_instanceFilter'] | null; // exercise_instanceFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    label?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['exerciseWhereInput'][] | null; // [exerciseWhereInput!]
    OR?: NexusGenInputs['exerciseWhereInput'][] | null; // [exerciseWhereInput!]
  }
  exerciseWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
  }
  exercise_instanceCreateManyWithoutExercise_sessionInput: { // input type
    connect?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    create?: NexusGenInputs['exercise_instanceCreateWithoutExercise_sessionInput'][] | null; // [exercise_instanceCreateWithoutExercise_sessionInput!]
  }
  exercise_instanceCreateWithoutExerciseInput: { // input type
    duration?: number | null; // Float
    exercise_session: NexusGenInputs['exercise_sessionCreateOneWithoutExercise_instanceInput']; // exercise_sessionCreateOneWithoutExercise_instanceInput!
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_instanceCreateWithoutExercise_sessionInput: { // input type
    duration?: number | null; // Float
    exercise: NexusGenInputs['exerciseCreateOneWithoutExercise_instanceInput']; // exerciseCreateOneWithoutExercise_instanceInput!
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_instanceFilter: { // input type
    every?: NexusGenInputs['exercise_instanceWhereInput'] | null; // exercise_instanceWhereInput
    none?: NexusGenInputs['exercise_instanceWhereInput'] | null; // exercise_instanceWhereInput
    some?: NexusGenInputs['exercise_instanceWhereInput'] | null; // exercise_instanceWhereInput
  }
  exercise_instanceScalarWhereInput: { // input type
    AND?: NexusGenInputs['exercise_instanceScalarWhereInput'][] | null; // [exercise_instanceScalarWhereInput!]
    duration?: NexusGenInputs['NullableFloatFilter'] | null; // NullableFloatFilter
    exerciseId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['exercise_instanceScalarWhereInput'][] | null; // [exercise_instanceScalarWhereInput!]
    OR?: NexusGenInputs['exercise_instanceScalarWhereInput'][] | null; // [exercise_instanceScalarWhereInput!]
    repetitions?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    sessionId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    weight?: NexusGenInputs['NullableFloatFilter'] | null; // NullableFloatFilter
  }
  exercise_instanceUpdateInput: { // input type
    duration?: number | null; // Float
    exercise?: NexusGenInputs['exerciseUpdateOneRequiredWithoutExercise_instanceInput'] | null; // exerciseUpdateOneRequiredWithoutExercise_instanceInput
    exercise_session?: NexusGenInputs['exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput'] | null; // exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput
    id?: number | null; // Int
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_instanceUpdateManyDataInput: { // input type
    duration?: number | null; // Float
    id?: number | null; // Int
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_instanceUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['exercise_instanceUpdateManyDataInput']; // exercise_instanceUpdateManyDataInput!
    where: NexusGenInputs['exercise_instanceScalarWhereInput']; // exercise_instanceScalarWhereInput!
  }
  exercise_instanceUpdateManyWithoutExerciseInput: { // input type
    connect?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    create?: NexusGenInputs['exercise_instanceCreateWithoutExerciseInput'][] | null; // [exercise_instanceCreateWithoutExerciseInput!]
    delete?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    deleteMany?: NexusGenInputs['exercise_instanceScalarWhereInput'][] | null; // [exercise_instanceScalarWhereInput!]
    disconnect?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    set?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    update?: NexusGenInputs['exercise_instanceUpdateWithWhereUniqueWithoutExerciseInput'][] | null; // [exercise_instanceUpdateWithWhereUniqueWithoutExerciseInput!]
    updateMany?: NexusGenInputs['exercise_instanceUpdateManyWithWhereNestedInput'][] | null; // [exercise_instanceUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['exercise_instanceUpsertWithWhereUniqueWithoutExerciseInput'][] | null; // [exercise_instanceUpsertWithWhereUniqueWithoutExerciseInput!]
  }
  exercise_instanceUpdateManyWithoutExercise_sessionInput: { // input type
    connect?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    create?: NexusGenInputs['exercise_instanceCreateWithoutExercise_sessionInput'][] | null; // [exercise_instanceCreateWithoutExercise_sessionInput!]
    delete?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    deleteMany?: NexusGenInputs['exercise_instanceScalarWhereInput'][] | null; // [exercise_instanceScalarWhereInput!]
    disconnect?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    set?: NexusGenInputs['exercise_instanceWhereUniqueInput'][] | null; // [exercise_instanceWhereUniqueInput!]
    update?: NexusGenInputs['exercise_instanceUpdateWithWhereUniqueWithoutExercise_sessionInput'][] | null; // [exercise_instanceUpdateWithWhereUniqueWithoutExercise_sessionInput!]
    updateMany?: NexusGenInputs['exercise_instanceUpdateManyWithWhereNestedInput'][] | null; // [exercise_instanceUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['exercise_instanceUpsertWithWhereUniqueWithoutExercise_sessionInput'][] | null; // [exercise_instanceUpsertWithWhereUniqueWithoutExercise_sessionInput!]
  }
  exercise_instanceUpdateWithWhereUniqueWithoutExerciseInput: { // input type
    data: NexusGenInputs['exercise_instanceUpdateWithoutExerciseDataInput']; // exercise_instanceUpdateWithoutExerciseDataInput!
    where: NexusGenInputs['exercise_instanceWhereUniqueInput']; // exercise_instanceWhereUniqueInput!
  }
  exercise_instanceUpdateWithWhereUniqueWithoutExercise_sessionInput: { // input type
    data: NexusGenInputs['exercise_instanceUpdateWithoutExercise_sessionDataInput']; // exercise_instanceUpdateWithoutExercise_sessionDataInput!
    where: NexusGenInputs['exercise_instanceWhereUniqueInput']; // exercise_instanceWhereUniqueInput!
  }
  exercise_instanceUpdateWithoutExerciseDataInput: { // input type
    duration?: number | null; // Float
    exercise_session?: NexusGenInputs['exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput'] | null; // exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput
    id?: number | null; // Int
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_instanceUpdateWithoutExercise_sessionDataInput: { // input type
    duration?: number | null; // Float
    exercise?: NexusGenInputs['exerciseUpdateOneRequiredWithoutExercise_instanceInput'] | null; // exerciseUpdateOneRequiredWithoutExercise_instanceInput
    id?: number | null; // Int
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_instanceUpsertWithWhereUniqueWithoutExerciseInput: { // input type
    create: NexusGenInputs['exercise_instanceCreateWithoutExerciseInput']; // exercise_instanceCreateWithoutExerciseInput!
    update: NexusGenInputs['exercise_instanceUpdateWithoutExerciseDataInput']; // exercise_instanceUpdateWithoutExerciseDataInput!
    where: NexusGenInputs['exercise_instanceWhereUniqueInput']; // exercise_instanceWhereUniqueInput!
  }
  exercise_instanceUpsertWithWhereUniqueWithoutExercise_sessionInput: { // input type
    create: NexusGenInputs['exercise_instanceCreateWithoutExercise_sessionInput']; // exercise_instanceCreateWithoutExercise_sessionInput!
    update: NexusGenInputs['exercise_instanceUpdateWithoutExercise_sessionDataInput']; // exercise_instanceUpdateWithoutExercise_sessionDataInput!
    where: NexusGenInputs['exercise_instanceWhereUniqueInput']; // exercise_instanceWhereUniqueInput!
  }
  exercise_instanceWhereInput: { // input type
    AND?: NexusGenInputs['exercise_instanceWhereInput'][] | null; // [exercise_instanceWhereInput!]
    duration?: NexusGenInputs['NullableFloatFilter'] | null; // NullableFloatFilter
    exercise?: NexusGenInputs['exerciseWhereInput'] | null; // exerciseWhereInput
    exercise_session?: NexusGenInputs['exercise_sessionWhereInput'] | null; // exercise_sessionWhereInput
    exerciseId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['exercise_instanceWhereInput'][] | null; // [exercise_instanceWhereInput!]
    OR?: NexusGenInputs['exercise_instanceWhereInput'][] | null; // [exercise_instanceWhereInput!]
    repetitions?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    sessionId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    weight?: NexusGenInputs['NullableFloatFilter'] | null; // NullableFloatFilter
  }
  exercise_instanceWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  exercise_sessionCreateOneWithoutExercise_instanceInput: { // input type
    connect?: NexusGenInputs['exercise_sessionWhereUniqueInput'] | null; // exercise_sessionWhereUniqueInput
    create?: NexusGenInputs['exercise_sessionCreateWithoutExercise_instanceInput'] | null; // exercise_sessionCreateWithoutExercise_instanceInput
  }
  exercise_sessionCreateWithoutExercise_instanceInput: { // input type
    note?: string | null; // String
    timestamp?: any | null; // DateTime
    user: NexusGenInputs['userCreateOneWithoutExercise_sessionInput']; // userCreateOneWithoutExercise_sessionInput!
  }
  exercise_sessionCreateWithoutUserInput: { // input type
    exercise_instance?: NexusGenInputs['exercise_instanceCreateManyWithoutExercise_sessionInput'] | null; // exercise_instanceCreateManyWithoutExercise_sessionInput
    note?: string | null; // String
    timestamp?: any | null; // DateTime
  }
  exercise_sessionFilter: { // input type
    every?: NexusGenInputs['exercise_sessionWhereInput'] | null; // exercise_sessionWhereInput
    none?: NexusGenInputs['exercise_sessionWhereInput'] | null; // exercise_sessionWhereInput
    some?: NexusGenInputs['exercise_sessionWhereInput'] | null; // exercise_sessionWhereInput
  }
  exercise_sessionScalarWhereInput: { // input type
    AND?: NexusGenInputs['exercise_sessionScalarWhereInput'][] | null; // [exercise_sessionScalarWhereInput!]
    exercise_instance?: NexusGenInputs['exercise_instanceFilter'] | null; // exercise_instanceFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['exercise_sessionScalarWhereInput'][] | null; // [exercise_sessionScalarWhereInput!]
    note?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    OR?: NexusGenInputs['exercise_sessionScalarWhereInput'][] | null; // [exercise_sessionScalarWhereInput!]
    timestamp?: NexusGenInputs['NullableDateTimeFilter'] | null; // NullableDateTimeFilter
    userId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  exercise_sessionUpdateInput: { // input type
    exercise_instance?: NexusGenInputs['exercise_instanceUpdateManyWithoutExercise_sessionInput'] | null; // exercise_instanceUpdateManyWithoutExercise_sessionInput
    id?: number | null; // Int
    note?: string | null; // String
    timestamp?: any | null; // DateTime
    user?: NexusGenInputs['userUpdateOneRequiredWithoutExercise_sessionInput'] | null; // userUpdateOneRequiredWithoutExercise_sessionInput
  }
  exercise_sessionUpdateManyDataInput: { // input type
    id?: number | null; // Int
    note?: string | null; // String
    timestamp?: any | null; // DateTime
  }
  exercise_sessionUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['exercise_sessionUpdateManyDataInput']; // exercise_sessionUpdateManyDataInput!
    where: NexusGenInputs['exercise_sessionScalarWhereInput']; // exercise_sessionScalarWhereInput!
  }
  exercise_sessionUpdateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['exercise_sessionWhereUniqueInput'][] | null; // [exercise_sessionWhereUniqueInput!]
    create?: NexusGenInputs['exercise_sessionCreateWithoutUserInput'][] | null; // [exercise_sessionCreateWithoutUserInput!]
    delete?: NexusGenInputs['exercise_sessionWhereUniqueInput'][] | null; // [exercise_sessionWhereUniqueInput!]
    deleteMany?: NexusGenInputs['exercise_sessionScalarWhereInput'][] | null; // [exercise_sessionScalarWhereInput!]
    disconnect?: NexusGenInputs['exercise_sessionWhereUniqueInput'][] | null; // [exercise_sessionWhereUniqueInput!]
    set?: NexusGenInputs['exercise_sessionWhereUniqueInput'][] | null; // [exercise_sessionWhereUniqueInput!]
    update?: NexusGenInputs['exercise_sessionUpdateWithWhereUniqueWithoutUserInput'][] | null; // [exercise_sessionUpdateWithWhereUniqueWithoutUserInput!]
    updateMany?: NexusGenInputs['exercise_sessionUpdateManyWithWhereNestedInput'][] | null; // [exercise_sessionUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['exercise_sessionUpsertWithWhereUniqueWithoutUserInput'][] | null; // [exercise_sessionUpsertWithWhereUniqueWithoutUserInput!]
  }
  exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput: { // input type
    connect?: NexusGenInputs['exercise_sessionWhereUniqueInput'] | null; // exercise_sessionWhereUniqueInput
    create?: NexusGenInputs['exercise_sessionCreateWithoutExercise_instanceInput'] | null; // exercise_sessionCreateWithoutExercise_instanceInput
    update?: NexusGenInputs['exercise_sessionUpdateWithoutExercise_instanceDataInput'] | null; // exercise_sessionUpdateWithoutExercise_instanceDataInput
    upsert?: NexusGenInputs['exercise_sessionUpsertWithoutExercise_instanceInput'] | null; // exercise_sessionUpsertWithoutExercise_instanceInput
  }
  exercise_sessionUpdateWithWhereUniqueWithoutUserInput: { // input type
    data: NexusGenInputs['exercise_sessionUpdateWithoutUserDataInput']; // exercise_sessionUpdateWithoutUserDataInput!
    where: NexusGenInputs['exercise_sessionWhereUniqueInput']; // exercise_sessionWhereUniqueInput!
  }
  exercise_sessionUpdateWithoutExercise_instanceDataInput: { // input type
    id?: number | null; // Int
    note?: string | null; // String
    timestamp?: any | null; // DateTime
    user?: NexusGenInputs['userUpdateOneRequiredWithoutExercise_sessionInput'] | null; // userUpdateOneRequiredWithoutExercise_sessionInput
  }
  exercise_sessionUpdateWithoutUserDataInput: { // input type
    exercise_instance?: NexusGenInputs['exercise_instanceUpdateManyWithoutExercise_sessionInput'] | null; // exercise_instanceUpdateManyWithoutExercise_sessionInput
    id?: number | null; // Int
    note?: string | null; // String
    timestamp?: any | null; // DateTime
  }
  exercise_sessionUpsertWithWhereUniqueWithoutUserInput: { // input type
    create: NexusGenInputs['exercise_sessionCreateWithoutUserInput']; // exercise_sessionCreateWithoutUserInput!
    update: NexusGenInputs['exercise_sessionUpdateWithoutUserDataInput']; // exercise_sessionUpdateWithoutUserDataInput!
    where: NexusGenInputs['exercise_sessionWhereUniqueInput']; // exercise_sessionWhereUniqueInput!
  }
  exercise_sessionUpsertWithoutExercise_instanceInput: { // input type
    create: NexusGenInputs['exercise_sessionCreateWithoutExercise_instanceInput']; // exercise_sessionCreateWithoutExercise_instanceInput!
    update: NexusGenInputs['exercise_sessionUpdateWithoutExercise_instanceDataInput']; // exercise_sessionUpdateWithoutExercise_instanceDataInput!
  }
  exercise_sessionWhereInput: { // input type
    AND?: NexusGenInputs['exercise_sessionWhereInput'][] | null; // [exercise_sessionWhereInput!]
    exercise_instance?: NexusGenInputs['exercise_instanceFilter'] | null; // exercise_instanceFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['exercise_sessionWhereInput'][] | null; // [exercise_sessionWhereInput!]
    note?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    OR?: NexusGenInputs['exercise_sessionWhereInput'][] | null; // [exercise_sessionWhereInput!]
    timestamp?: NexusGenInputs['NullableDateTimeFilter'] | null; // NullableDateTimeFilter
    user?: NexusGenInputs['userWhereInput'] | null; // userWhereInput
    userId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  exercise_sessionWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  userCreateOneWithoutExercise_sessionInput: { // input type
    connect?: NexusGenInputs['userWhereUniqueInput'] | null; // userWhereUniqueInput
    create?: NexusGenInputs['userCreateWithoutExercise_sessionInput'] | null; // userCreateWithoutExercise_sessionInput
  }
  userCreateWithoutExercise_sessionInput: { // input type
    email: string; // String!
    name?: string | null; // String
  }
  userUpdateInput: { // input type
    email?: string | null; // String
    exercise_session?: NexusGenInputs['exercise_sessionUpdateManyWithoutUserInput'] | null; // exercise_sessionUpdateManyWithoutUserInput
    id?: number | null; // Int
    name?: string | null; // String
  }
  userUpdateOneRequiredWithoutExercise_sessionInput: { // input type
    connect?: NexusGenInputs['userWhereUniqueInput'] | null; // userWhereUniqueInput
    create?: NexusGenInputs['userCreateWithoutExercise_sessionInput'] | null; // userCreateWithoutExercise_sessionInput
    update?: NexusGenInputs['userUpdateWithoutExercise_sessionDataInput'] | null; // userUpdateWithoutExercise_sessionDataInput
    upsert?: NexusGenInputs['userUpsertWithoutExercise_sessionInput'] | null; // userUpsertWithoutExercise_sessionInput
  }
  userUpdateWithoutExercise_sessionDataInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
  }
  userUpsertWithoutExercise_sessionInput: { // input type
    create: NexusGenInputs['userCreateWithoutExercise_sessionInput']; // userCreateWithoutExercise_sessionInput!
    update: NexusGenInputs['userUpdateWithoutExercise_sessionDataInput']; // userUpdateWithoutExercise_sessionDataInput!
  }
  userWhereInput: { // input type
    AND?: NexusGenInputs['userWhereInput'][] | null; // [userWhereInput!]
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    exercise_session?: NexusGenInputs['exercise_sessionFilter'] | null; // exercise_sessionFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    NOT?: NexusGenInputs['userWhereInput'][] | null; // [userWhereInput!]
    OR?: NexusGenInputs['userWhereInput'][] | null; // [userWhereInput!]
  }
  userWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  exercise: { // root type
    id: number; // Int!
    label: string; // String!
    name: string; // String!
  }
  exercise_instance: { // root type
    duration?: number | null; // Float
    id: number; // Int!
    repetitions?: number | null; // Int
    weight?: number | null; // Float
  }
  exercise_session: { // root type
    id: number; // Int!
    note?: string | null; // String
    timestamp?: any | null; // DateTime
  }
  user: { // root type
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  IntFilter: NexusGenInputs['IntFilter'];
  NullableDateTimeFilter: NexusGenInputs['NullableDateTimeFilter'];
  NullableFloatFilter: NexusGenInputs['NullableFloatFilter'];
  NullableIntFilter: NexusGenInputs['NullableIntFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  StringFilter: NexusGenInputs['StringFilter'];
  exerciseCreateOneWithoutExercise_instanceInput: NexusGenInputs['exerciseCreateOneWithoutExercise_instanceInput'];
  exerciseCreateWithoutExercise_instanceInput: NexusGenInputs['exerciseCreateWithoutExercise_instanceInput'];
  exerciseUpdateInput: NexusGenInputs['exerciseUpdateInput'];
  exerciseUpdateOneRequiredWithoutExercise_instanceInput: NexusGenInputs['exerciseUpdateOneRequiredWithoutExercise_instanceInput'];
  exerciseUpdateWithoutExercise_instanceDataInput: NexusGenInputs['exerciseUpdateWithoutExercise_instanceDataInput'];
  exerciseUpsertWithoutExercise_instanceInput: NexusGenInputs['exerciseUpsertWithoutExercise_instanceInput'];
  exerciseWhereInput: NexusGenInputs['exerciseWhereInput'];
  exerciseWhereUniqueInput: NexusGenInputs['exerciseWhereUniqueInput'];
  exercise_instanceCreateManyWithoutExercise_sessionInput: NexusGenInputs['exercise_instanceCreateManyWithoutExercise_sessionInput'];
  exercise_instanceCreateWithoutExerciseInput: NexusGenInputs['exercise_instanceCreateWithoutExerciseInput'];
  exercise_instanceCreateWithoutExercise_sessionInput: NexusGenInputs['exercise_instanceCreateWithoutExercise_sessionInput'];
  exercise_instanceFilter: NexusGenInputs['exercise_instanceFilter'];
  exercise_instanceScalarWhereInput: NexusGenInputs['exercise_instanceScalarWhereInput'];
  exercise_instanceUpdateInput: NexusGenInputs['exercise_instanceUpdateInput'];
  exercise_instanceUpdateManyDataInput: NexusGenInputs['exercise_instanceUpdateManyDataInput'];
  exercise_instanceUpdateManyWithWhereNestedInput: NexusGenInputs['exercise_instanceUpdateManyWithWhereNestedInput'];
  exercise_instanceUpdateManyWithoutExerciseInput: NexusGenInputs['exercise_instanceUpdateManyWithoutExerciseInput'];
  exercise_instanceUpdateManyWithoutExercise_sessionInput: NexusGenInputs['exercise_instanceUpdateManyWithoutExercise_sessionInput'];
  exercise_instanceUpdateWithWhereUniqueWithoutExerciseInput: NexusGenInputs['exercise_instanceUpdateWithWhereUniqueWithoutExerciseInput'];
  exercise_instanceUpdateWithWhereUniqueWithoutExercise_sessionInput: NexusGenInputs['exercise_instanceUpdateWithWhereUniqueWithoutExercise_sessionInput'];
  exercise_instanceUpdateWithoutExerciseDataInput: NexusGenInputs['exercise_instanceUpdateWithoutExerciseDataInput'];
  exercise_instanceUpdateWithoutExercise_sessionDataInput: NexusGenInputs['exercise_instanceUpdateWithoutExercise_sessionDataInput'];
  exercise_instanceUpsertWithWhereUniqueWithoutExerciseInput: NexusGenInputs['exercise_instanceUpsertWithWhereUniqueWithoutExerciseInput'];
  exercise_instanceUpsertWithWhereUniqueWithoutExercise_sessionInput: NexusGenInputs['exercise_instanceUpsertWithWhereUniqueWithoutExercise_sessionInput'];
  exercise_instanceWhereInput: NexusGenInputs['exercise_instanceWhereInput'];
  exercise_instanceWhereUniqueInput: NexusGenInputs['exercise_instanceWhereUniqueInput'];
  exercise_sessionCreateOneWithoutExercise_instanceInput: NexusGenInputs['exercise_sessionCreateOneWithoutExercise_instanceInput'];
  exercise_sessionCreateWithoutExercise_instanceInput: NexusGenInputs['exercise_sessionCreateWithoutExercise_instanceInput'];
  exercise_sessionCreateWithoutUserInput: NexusGenInputs['exercise_sessionCreateWithoutUserInput'];
  exercise_sessionFilter: NexusGenInputs['exercise_sessionFilter'];
  exercise_sessionScalarWhereInput: NexusGenInputs['exercise_sessionScalarWhereInput'];
  exercise_sessionUpdateInput: NexusGenInputs['exercise_sessionUpdateInput'];
  exercise_sessionUpdateManyDataInput: NexusGenInputs['exercise_sessionUpdateManyDataInput'];
  exercise_sessionUpdateManyWithWhereNestedInput: NexusGenInputs['exercise_sessionUpdateManyWithWhereNestedInput'];
  exercise_sessionUpdateManyWithoutUserInput: NexusGenInputs['exercise_sessionUpdateManyWithoutUserInput'];
  exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput: NexusGenInputs['exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput'];
  exercise_sessionUpdateWithWhereUniqueWithoutUserInput: NexusGenInputs['exercise_sessionUpdateWithWhereUniqueWithoutUserInput'];
  exercise_sessionUpdateWithoutExercise_instanceDataInput: NexusGenInputs['exercise_sessionUpdateWithoutExercise_instanceDataInput'];
  exercise_sessionUpdateWithoutUserDataInput: NexusGenInputs['exercise_sessionUpdateWithoutUserDataInput'];
  exercise_sessionUpsertWithWhereUniqueWithoutUserInput: NexusGenInputs['exercise_sessionUpsertWithWhereUniqueWithoutUserInput'];
  exercise_sessionUpsertWithoutExercise_instanceInput: NexusGenInputs['exercise_sessionUpsertWithoutExercise_instanceInput'];
  exercise_sessionWhereInput: NexusGenInputs['exercise_sessionWhereInput'];
  exercise_sessionWhereUniqueInput: NexusGenInputs['exercise_sessionWhereUniqueInput'];
  userCreateOneWithoutExercise_sessionInput: NexusGenInputs['userCreateOneWithoutExercise_sessionInput'];
  userCreateWithoutExercise_sessionInput: NexusGenInputs['userCreateWithoutExercise_sessionInput'];
  userUpdateInput: NexusGenInputs['userUpdateInput'];
  userUpdateOneRequiredWithoutExercise_sessionInput: NexusGenInputs['userUpdateOneRequiredWithoutExercise_sessionInput'];
  userUpdateWithoutExercise_sessionDataInput: NexusGenInputs['userUpdateWithoutExercise_sessionDataInput'];
  userUpsertWithoutExercise_sessionInput: NexusGenInputs['userUpsertWithoutExercise_sessionInput'];
  userWhereInput: NexusGenInputs['userWhereInput'];
  userWhereUniqueInput: NexusGenInputs['userWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createExercise: NexusGenRootTypes['exercise']; // exercise!
    createExerciseInstance: NexusGenRootTypes['exercise_instance']; // exercise_instance!
    createExerciseSession: NexusGenRootTypes['exercise_session']; // exercise_session!
    deleteManyexercise_instance: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyexercise_session: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOneexercise: NexusGenRootTypes['exercise'] | null; // exercise
    deleteOneexercise_session: NexusGenRootTypes['exercise_session'] | null; // exercise_session
    deleteOneuser: NexusGenRootTypes['user'] | null; // user
    signupUser: NexusGenRootTypes['user']; // user!
    updateOneexercise: NexusGenRootTypes['exercise'] | null; // exercise
    updateOneexercise_instance: NexusGenRootTypes['exercise_instance'] | null; // exercise_instance
    updateOneexercise_session: NexusGenRootTypes['exercise_session'] | null; // exercise_session
    updateOneuser: NexusGenRootTypes['user'] | null; // user
  }
  Query: { // field return type
    exerciseInstances: NexusGenRootTypes['exercise_instance'][]; // [exercise_instance!]!
    exercises: NexusGenRootTypes['exercise'][]; // [exercise!]!
    exerciseSessions: NexusGenRootTypes['exercise_session'][]; // [exercise_session!]!
    users: NexusGenRootTypes['user'][]; // [user!]!
  }
  exercise: { // field return type
    id: number; // Int!
    label: string; // String!
    name: string; // String!
  }
  exercise_instance: { // field return type
    duration: number | null; // Float
    exercise: NexusGenRootTypes['exercise']; // exercise!
    exercise_session: NexusGenRootTypes['exercise_session']; // exercise_session!
    id: number; // Int!
    repetitions: number | null; // Int
    weight: number | null; // Float
  }
  exercise_session: { // field return type
    exercise_instance: NexusGenRootTypes['exercise_instance'][]; // [exercise_instance!]!
    id: number; // Int!
    note: string | null; // String
    timestamp: any | null; // DateTime
    user: NexusGenRootTypes['user']; // user!
  }
  user: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createExercise: { // args
      label?: string | null; // String
      name?: string | null; // String
    }
    createExerciseInstance: { // args
      duration?: number | null; // Float
      exerciseId: number; // Int!
      repetitions?: number | null; // Int
      sessionId: number; // Int!
      weight?: number | null; // Float
    }
    createExerciseSession: { // args
      note?: string | null; // String
      userId: number; // Int!
    }
    deleteManyexercise_instance: { // args
      where?: NexusGenInputs['exercise_instanceWhereInput'] | null; // exercise_instanceWhereInput
    }
    deleteManyexercise_session: { // args
      where?: NexusGenInputs['exercise_sessionWhereInput'] | null; // exercise_sessionWhereInput
    }
    deleteOneexercise: { // args
      where: NexusGenInputs['exerciseWhereUniqueInput']; // exerciseWhereUniqueInput!
    }
    deleteOneexercise_session: { // args
      where: NexusGenInputs['exercise_sessionWhereUniqueInput']; // exercise_sessionWhereUniqueInput!
    }
    deleteOneuser: { // args
      where: NexusGenInputs['userWhereUniqueInput']; // userWhereUniqueInput!
    }
    signupUser: { // args
      email?: string | null; // String
      name?: string | null; // String
    }
    updateOneexercise: { // args
      data: NexusGenInputs['exerciseUpdateInput']; // exerciseUpdateInput!
      where: NexusGenInputs['exerciseWhereUniqueInput']; // exerciseWhereUniqueInput!
    }
    updateOneexercise_instance: { // args
      data: NexusGenInputs['exercise_instanceUpdateInput']; // exercise_instanceUpdateInput!
      where: NexusGenInputs['exercise_instanceWhereUniqueInput']; // exercise_instanceWhereUniqueInput!
    }
    updateOneexercise_session: { // args
      data: NexusGenInputs['exercise_sessionUpdateInput']; // exercise_sessionUpdateInput!
      where: NexusGenInputs['exercise_sessionWhereUniqueInput']; // exercise_sessionWhereUniqueInput!
    }
    updateOneuser: { // args
      data: NexusGenInputs['userUpdateInput']; // userUpdateInput!
      where: NexusGenInputs['userWhereUniqueInput']; // userWhereUniqueInput!
    }
  }
  Query: {
    exerciseInstances: { // args
      sessionId: number; // Int!
    }
    exerciseSessions: { // args
      userId: number; // Int!
    }
  }
  exercise_session: {
    exercise_instance: { // args
      after?: NexusGenInputs['exercise_instanceWhereUniqueInput'] | null; // exercise_instanceWhereUniqueInput
      before?: NexusGenInputs['exercise_instanceWhereUniqueInput'] | null; // exercise_instanceWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Mutation" | "Query" | "exercise" | "exercise_instance" | "exercise_session" | "user";

export type NexusGenInputNames = "IntFilter" | "NullableDateTimeFilter" | "NullableFloatFilter" | "NullableIntFilter" | "NullableStringFilter" | "StringFilter" | "exerciseCreateOneWithoutExercise_instanceInput" | "exerciseCreateWithoutExercise_instanceInput" | "exerciseUpdateInput" | "exerciseUpdateOneRequiredWithoutExercise_instanceInput" | "exerciseUpdateWithoutExercise_instanceDataInput" | "exerciseUpsertWithoutExercise_instanceInput" | "exerciseWhereInput" | "exerciseWhereUniqueInput" | "exercise_instanceCreateManyWithoutExercise_sessionInput" | "exercise_instanceCreateWithoutExerciseInput" | "exercise_instanceCreateWithoutExercise_sessionInput" | "exercise_instanceFilter" | "exercise_instanceScalarWhereInput" | "exercise_instanceUpdateInput" | "exercise_instanceUpdateManyDataInput" | "exercise_instanceUpdateManyWithWhereNestedInput" | "exercise_instanceUpdateManyWithoutExerciseInput" | "exercise_instanceUpdateManyWithoutExercise_sessionInput" | "exercise_instanceUpdateWithWhereUniqueWithoutExerciseInput" | "exercise_instanceUpdateWithWhereUniqueWithoutExercise_sessionInput" | "exercise_instanceUpdateWithoutExerciseDataInput" | "exercise_instanceUpdateWithoutExercise_sessionDataInput" | "exercise_instanceUpsertWithWhereUniqueWithoutExerciseInput" | "exercise_instanceUpsertWithWhereUniqueWithoutExercise_sessionInput" | "exercise_instanceWhereInput" | "exercise_instanceWhereUniqueInput" | "exercise_sessionCreateOneWithoutExercise_instanceInput" | "exercise_sessionCreateWithoutExercise_instanceInput" | "exercise_sessionCreateWithoutUserInput" | "exercise_sessionFilter" | "exercise_sessionScalarWhereInput" | "exercise_sessionUpdateInput" | "exercise_sessionUpdateManyDataInput" | "exercise_sessionUpdateManyWithWhereNestedInput" | "exercise_sessionUpdateManyWithoutUserInput" | "exercise_sessionUpdateOneRequiredWithoutExercise_instanceInput" | "exercise_sessionUpdateWithWhereUniqueWithoutUserInput" | "exercise_sessionUpdateWithoutExercise_instanceDataInput" | "exercise_sessionUpdateWithoutUserDataInput" | "exercise_sessionUpsertWithWhereUniqueWithoutUserInput" | "exercise_sessionUpsertWithoutExercise_instanceInput" | "exercise_sessionWhereInput" | "exercise_sessionWhereUniqueInput" | "userCreateOneWithoutExercise_sessionInput" | "userCreateWithoutExercise_sessionInput" | "userUpdateInput" | "userUpdateOneRequiredWithoutExercise_sessionInput" | "userUpdateWithoutExercise_sessionDataInput" | "userUpsertWithoutExercise_sessionInput" | "userWhereInput" | "userWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}