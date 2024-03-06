import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Player extends Document {
    @Prop({ required: true })
    name: string;

    // Add more properties as needed

    // You can also define virtual properties, methods, statics, etc.
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
