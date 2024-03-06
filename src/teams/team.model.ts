import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Team extends Document {
    @Prop({ required: true })
    name: string;

    // Add more properties as needed

    // You can also define virtual properties, methods, statics, etc.
}

export const TeamSchema = SchemaFactory.createForClass(Team);
